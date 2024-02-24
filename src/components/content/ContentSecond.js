import React from 'react';

const ContentSecond = () => {
    return (
        <div className="content2_wrapper">
            <div className="content2">
                <div className="content2_text">
                    <div className="content2_text_wrapper">
                        <div className="content2_text_words">НИЧЕГО</div>
                        <div className="content2_text_words">ЛИШНЕГО</div>
                    </div>
                </div>
                <div className="content2_photo content2_photo-1">
                    <div className="content2_photo_haircut">СТРИЖКА</div>
                    <div className="content2_photo_price">700</div>
                </div>
                <div className="content2_photo content2_photo-2">
                    <div className="content2_photo_haircut" style={{width: "70%"}}>ОФОРМЛЕНИЕ БОРОДЫ</div>
                    <div className="content2_photo_price">400</div>
                </div>
            </div>
        </div>
    );
};

export default ContentSecond;