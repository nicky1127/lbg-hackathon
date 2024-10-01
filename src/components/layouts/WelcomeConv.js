import { Button, Input, Paper, Rating, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSentimentScore, setWelcomeText } from "../../store/CustomerSlice";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { styled } from '@mui/material/styles';

const StyledRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
        color: theme.palette.action.disabled,
    },
}));

const customIcons = {
    1: {
        icon: <SentimentVeryDissatisfiedIcon color="error" />,
        label: 'Very Dissatisfied',
    },
    2: {
        icon: <SentimentDissatisfiedIcon color="error" />,
        label: 'Dissatisfied',
    },
    3: {
        icon: <SentimentSatisfiedIcon color="warning" />,
        label: 'Neutral',
    },
    4: {
        icon: <SentimentSatisfiedAltIcon color="success" />,
        label: 'Satisfied',
    },
    5: {
        icon: <SentimentVerySatisfiedIcon color="success" />,
        label: 'Very Satisfied',
    },
};

function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}

const WelcomeConv = () => {
    const dispatch = useDispatch();

    const sentimentScore = useSelector((store) => store.customer.sentimentScore)

    const [showRating, setShowRating] = useState(false);
    const [rating, setRating] = useState(0);

    const [text, setText] = useState('');

    useEffect(() => {
        console.log("useeffect: ", sentimentScore);

        if (sentimentScore && sentimentScore.Score > 0) {
            setShowRating(true);
            setRating(sentimentScore.Score * 5)
        }
    }, [sentimentScore])

    const handleSubmit = async () => {

        const response = await fetch('http://34.39.22.106:5000/sentiment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: text }),
        });

        const data = await response.json();

        dispatch(setSentimentScore(data));
    };
    return (
        <Paper
            sx={{
                backgroundColor: "#fff",
                borderRadius: "15px",
                overflow: "hidden",
                padding: "20px",
            }}
        > <Stack>
                <Input type="text" onChange={(e) => setText(e.target.value)}>
                </Input>
                <Button onClick={() => handleSubmit()}>Submit</Button>
                {showRating && <StyledRating
                    name="highlight-selected-only"
                    value={rating}
                    IconContainerComponent={IconContainer}
                    getLabelText={(value) => customIcons[value].label}
                    highlightSelectedOnly
                    size="large"
                />}
            </Stack>
        </Paper>
    )
}

export default WelcomeConv;