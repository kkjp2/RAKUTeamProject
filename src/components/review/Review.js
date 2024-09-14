import React from 'react';
import './Review.css';

const Review = () => {
    const entries = [
        {
            date: '2024-09-10',
            label: '引越し体験',
            content: 'とてもスムーズな引越しでした。スタッフは親切で、迅速に対応してくれました。',
        },
        {
            date: '2024-09-08',
            label: 'サービス満足度',
            content: '引越し当日、時間通りに来てくれて安心しました。次回もお願いしたいと思います。',
        },
        {
            date: '2024-09-05',
            label: 'コストパフォーマンス',
            content: '他社と比べて、コストパフォーマンスが非常に高いと感じました。',
        },
        {
            date: '2024-09-01',
            label: '引越し準備',
            content: '事前に必要な準備がわかりやすく、安心して当日を迎えることができました。',
        },
        {
            date: '2024-08-31',
            label: 'サービス満足度',
            content: '引越し当日、時間通りに来てくれて安心しました。次回もお願いしたいと思います。',
        },
        {
            date: '2024-08-12',
            label: '引越し準備',
            content: '事前に必要な準備がわかりやすく、安心して当日を迎えることができました。',
        },
        {
            date: '2024-05-21',
            label: '引越し準備',
            content: '事前に必要な準備がわかりやすく、安心して当日を迎えることができました。',
        },
        {
            date: '2024-04-01',
            label: '引越し準備',
            content: '事前に必要な準備がわかりやすく、安心して当日を迎えることができました。',
        },
    ];

    return (
        <div className="timeline">
            {entries.map((entry, index) => (
                <div className="timeline-item" key={index}>
                    <div className="timeline-content">
                        <span className="review-date">{entry.date}</span>
                        <h3 className="review-label">{entry.label}</h3>
                        <p className="review-content">{entry.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Review;
