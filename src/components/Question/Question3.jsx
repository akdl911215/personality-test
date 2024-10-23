import React, {useState} from 'react';
import image from "../../assets/images/3.png";

const Question3 = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    // 각 선택지에 대한 설명 데이터
    const optionDescriptions = [
        `무드 있는 이성에게 매력을 느껴요. 부드럽게 감싸주면서 따듯하게 대해주는 상대에게도 호감을 느끼네요`,
        '자신에게만큼은 다정하고 따듯하게 대해주며 조용히 함께해 주는 사람에게 호감을 느껴요',
        '스마트하고 능력이 좋은 이성에게 매력을 느껴요. 첫 만남부터 스킨십의 진도가 빨리 나가는 경우가 있이요. 상대방 당황하지 않게 조심~~',
        '자유로운 이성에게 끌려요. 개성 있는 이성에게 호감을 느껴요. 평범 밤을 거부하는 스타일!'
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
                <h2>3. 마음에 드는 이성과</h2>
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
                <p>Q 마음에 드는 이성과 술을 마시고 있습니다.</p>
                <p>취기가 확 올라와 어지러운 상태</p>
                <p>이때 함께 있던 이성이 당신에게 어떤 행동을 하면 좋으까요?</p>
            </div>

            {/* 선택지 */}
            <div>
                <ol style={optionsStyle}>
                    {['시원한 물을 주면서 정신 차려라고 한다', '다정하게 어깨를 감사면서 다정하게 괜찮아라고 물어본다',
                        '술 깨면 머리 아플 텐데 조금 쉬면서 마셔라고 한다', '취하라고 술을 마시는 거지 마셔 마셔!! 라고 한다'].map((option, index) => (
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
                    <h3>{selectedOption + 1}. {['시원한 물을 주면서 정신 차려라고 한다', '다정하게 어깨를 감사면서 다정하게 괜찮아라고 물어본다',
                        '술 깨면 머리 아플 텐데 조금 쉬면서 마셔라고 한다', '취하라고 술을 마시는 거지 마셔 마셔!! 라고 한다'][selectedOption]}</h3>
                    <p>{optionDescriptions[selectedOption]}</p>
                </div>
            )}
        </div>
    );
}
export default Question3;