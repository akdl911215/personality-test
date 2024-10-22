import React, { useState } from 'react';
import image from '../../assets/images/1.png'

const Question1 = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    // 각 선택지에 대한 설명 데이터
    const optionDescriptions = [
        '에너지가 넘치고 의욕적이어서 삶을 매우 치열하게 살아가지만 때로는 모든 책임을 벗고 해방 받고 싶은 욕구가 커요. 연애로 봤을 때는 일편단심 스타일이에요. 무조건 적극적으로 대시하는 성격!',
        '힘든 일이 있어도 티 내지 않으려고 노력하는 스타일! 원하는 목표를 이룰 때까지 포기하지 않고 강한 의지로 남에게 인정받으려 하고 경쟁을 즐겨요. 연애에서는 사랑이 넘치길 원해요.',
        '가끔 사소한 불만들이 생기면서 한 번에 폭발하는 경우가 있어요. 연애할 때는 본인 의견보다 상대 의견을 들어주는 편이에요. 상대방의 반응에 맞춰 행동하는 스타일이네요.',
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
                <h2>1. 떨어진 낙엽</h2>
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
                <p>Q 가을에 산책하는데 머리에 떨어진 낙엽, 떨어진 낙엽이 무엇일까요?</p>
            </div>

            {/* 선택지 */}
            <div>
                <ol style={optionsStyle}>
                    {['빨간 단풍잎', '노란 은행잎', '나뭇가지'].map((option, index) => (
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
                    <h3>{selectedOption + 1}. {['빨간 단풍잎', '노란 은행잎', '나뭇가지'][selectedOption]}</h3>
                    <p>{optionDescriptions[selectedOption]}</p>
                </div>
            )}
        </div>
    );
};

export default Question1;
