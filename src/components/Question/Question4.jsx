import React, {useState} from 'react';
import image from "../../assets/images/4.png";

const Question4 = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    // 각 선택지에 대한 설명 데이터
    const optionDescriptions = [
        `밀당 지수 90점! 밀당을 잘하는 타입! 이성 앞에서 자기 자신을 최고의 이성으로 연기할 수 있는 사람이에요`,
        '밀당 지수 0점! 밀당을 할 줄 모르는 스타일이에요. 상대방에게 감정을 다 표현한는 타입!',
        '밀당 지수 40점! 밀당을 길게하는 스타일이에요. 상대가 호감을 표시해도 바로 받아 주지 않고 신중해요',
        '밀당 지수 20점! 밀당을 시도하지만 생각처럼 잘되지 않는 스타일이에요. 마음이 쉽게 녹아내려요! 밀당을 해보려고 해도 마음처럼 되지 않죠'
    ];

    // 스타일 정의
    const containerStyle = {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
    };

    const headerStyle = {
        textAlign: 'center',
        marginBottom: '10px',
        fontSize: '1.5rem',
        color: '#444',
    };

    const imageStyle = {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '8px',
        marginBottom: '20px',
    };

    const textStyle = {
        fontSize: '1.1rem',
        textAlign: 'center',
        marginBottom: '15px',
    };

    const optionsStyle = {
        textAlign: 'left',
        listStyleType: 'decimal',
        paddingLeft: '20px',
    };

    const optionItemStyle = {
        fontSize: '1rem',
        marginBottom: '8px',
        cursor: 'pointer',
    };

    const descriptionStyle = {
        marginTop: '20px',
        padding: '15px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        fontSize: '1rem',
    };

    // 선택지 클릭 핸들러
    const handleOptionClick = (index) => {
        setSelectedOption(index);
    };

    return (
        <div style={containerStyle}>
            {/* 헤더 */}
            <div style={headerStyle}>
                <h2>4. 밀당 능력</h2>
            </div>

            {/* 이미지 */}
            <div>
                <img
                    src={image}
                    alt="가을의 풍경"
                    style={imageStyle}
                />
            </div>

            {/* 질문 텍스트 */}
            <div style={textStyle}>
                <p>Q 당신은 신입 탐정!</p>
                <p>처음으로 사건을 맡았는데 탐정으로 활동하기 위해</p>
                <p>가장 필요한 것은 무엇이라고 생각하나요?</p>
            </div>

            {/* 선택지 */}
            <div>
                <ol style={optionsStyle}>
                    {['변장도구', '무기', '필기도구', '호신술'].map((option, index) => (
                        <li
                            key={index}
                            style={optionItemStyle}
                            onClick={() => handleOptionClick(index)}
                        >
                            {option}
                        </li>
                    ))}
                </ol>
            </div>

            {/* 선택지에 대한 설명 표시 */}
            {selectedOption !== null && (
                <div style={descriptionStyle}>
                    <h3>{selectedOption + 1}. {['변장도구', '무기', '필기도구', '호신술'][selectedOption]}</h3>
                    <p>{optionDescriptions[selectedOption]}</p>
                </div>
            )}
        </div>
    );
}
export default Question4;