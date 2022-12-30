import dayjs from "dayjs";
import { useState } from "react";

const WEEKS = ["일", "월", "화", "수", "목", "금", "토"];

const Cal = () => {
    const [curMonth, setCurMonth] = useState(dayjs());

    const [last, curr] = (() => {
        const monthStartDate = Number(curMonth.startOf("M").format("d")); // 해당 날짜의 달에서 시작 요일 인덱스
        const monthEndDay = Number(curMonth.endOf("M").format("D")); // 해당날짜의 달 마지막 요일 날짜

        const lastMonth = [];
        const currMonth = [];

        for (let i = 0; i < monthStartDate; i += 1) {
            lastMonth.push(" ");
        }

        for (let i = 1; i <= monthEndDay; i += 1) {
            currMonth.push(i);
        }
        return [lastMonth, currMonth];
    })();

    const onPrevMonth = () => {
        const { $y, $M } = curMonth;
        const temp = curMonth.set("M", $M - 1);
        setCurMonth(temp);
    };

    const onNextMonth = () => {
        const { $y, $M } = curMonth;
        const temp = curMonth.set("M", $M + 1);
        setCurMonth(temp);
    };

    return (
        <div>
            <h1>{curMonth.format("YYYY-MM")}</h1>

            <div>
                <button onClick={onPrevMonth}>이전</button>
                <button onClick={onNextMonth}>다음</button>
            </div>
            <div
                className="inner-body"
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(7, 1fr)",
                    gridGap: "1rem",
                    color: "wheat",
                    margin: "2rem",
                    textAlign: "center",
                }}
            >
                {WEEKS.map((date, i) => {
                    return <div key={i}>{date}</div>;
                })}
                {last.map((date, i) => {
                    return <div key={i}>{date}</div>;
                })}
                {curr.map((date, i) => {
                    return <div key={i}>{date}</div>;
                })}
            </div>
        </div>
    );
};

export default Cal;
