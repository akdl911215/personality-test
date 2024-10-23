import React, {useState} from 'react';
import image from "../../assets/images/2.png";

const Question2 = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    // 각 선택지에 대한 설명 데이터
    const optionDescriptions = [
        '수학적인 면에서 약하지만 예술적인 분야에서는 강해요',
        '애교가 많은 편이나 한번 화가 나면 풀기 어렵습니다',
        '수학적인 면에서 강하고 예술적인 분야에서는 약해요',
        '까다로운 성격이 있지만 고맙다, 미안하다고 할 때 진심을 담아서 해요'
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
                <h2>2. 바구니 안</h2>
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
                    {['과일', '초콜릿, 사탕, 과자', '채소', '달걀'].map((option, index) => (
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
                    <h3>{selectedOption + 1}. {['과일', '초콜릿, 사탕, 과자', '채소', '달걀'][selectedOption]}</h3>
                    <p>{optionDescriptions[selectedOption]}</p>
                </div>
            )}
        </div>
    );
}
export default Question2;