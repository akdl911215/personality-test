import React, {useEffect} from 'react';
import Question1 from '../components/Question/Question1';
import Question2 from '../components/Question/Question2';
import Question3 from '../components/Question/Question3';
import Question4 from "../components/Question/Question4";
import Question5 from "../components/Question/Question5";
import Question6 from "../components/Question/Question6";

// https://m.blog.naver.com/rlatnwl0620/223276945031
const Home = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);

    const questions = [
        <Question1/>,
        <Question2/>,
        <Question3/>,
        <Question4/>,
        <Question5/>,
        <Question6/>,
    ];

    const goToNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    }

    const goToPreviousQuestion = () => {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
    }

    useEffect(() => console.log('currentQuestionIndex : ', currentQuestionIndex))

    return (
        <div>
            <h1>심리 테스트에 오신것을 환영합니다.</h1>
            <div>{questions[currentQuestionIndex]}</div>

            {
                currentQuestionIndex > 0 && (
                    <button onClick={goToPreviousQuestion}>이전 질문</button>
                )
            }

            {
                currentQuestionIndex < questions.length - 1 && (
                    <button onClick={goToNextQuestion}>다음 질문</button>
                )
            }

        </div>
    )
}
export default Home;