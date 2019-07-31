import React from 'react';
import Transition from 'react-transition-group/Transition';

const data = [
    {
        name: 'q1',
        text: 'どういうシーンでバストメイクを<br>楽しみたい? 1つ選んでね',
        options: [
            'デイリー',
            'スペシャル（デート・ドレスアップ）',
            'アクティブ',
            'リラックス'
        ]
    },
    {
        name: 'q2',
        text: 'ブラを選ぶときに重視するポイントは？',
        options: [
            'しっかりホールド安定感',
            'ワイヤーだけどラク',
            'ムレにくく快適',
            '洋服にひびきにくい',
            'ストレスフリー'
        ]
    },
    {
        name: 'q3',
        text: '理想のバストルックは？',
        options: [
            'ボリュームアップ',
            '美谷間メイク',
            'ナチュラル'
        ],
        buttonLabel: 'おすすめの"FIT"はコチラ！'
    }
];

class App extends React.Component {
    constructor(props) {
        super(props);

        this.initialState = {
            q1: '',
            q2: '',
            q3: '',
            current: 0,
        }

        this.state = {
            ...this.initialState
        }

        this.smoothScroll;
    }
    
    selectOption(question_index, option_idx) {
        this.setState(prevState => ({
            [`q${question_index + 1}`] : String(option_idx + 1)
        }))
    }

    nextStep(index) {

        if ( this.state[`q${index}`] === '' ) {
            return;
        }

        this.setState( prevState => ({
            current: index
        }))
    }

    reset() {
        this.setState(prevState => ({
            ...this.initialState
        }))
    }

    render() {

        const duration = 400;
        const timingFunction = "ease-out";

        const setStyle = ( type ) => ({
            entering: {
                animation: `${type}__in ${duration}ms ${timingFunction} 0s 1 normal forwards`,
                WebkitAnimation: `${type}__in ${duration}ms ${timingFunction} 0s 1 normal forwards`,
            },
            exiting: {
                animation: `${type}__out ${duration}ms ${timingFunction} 0s 1 normal forwards`,
                WebkitAnimation: `${type}__out ${duration}ms ${timingFunction} 0s 1 normal forwards`,
            }     
        })

        const questions = data.map((item, question_index) => (
            <Transition
                key={question_index}
                in={this.state.current === question_index}
                mountOnEnter
                unmountOnExit
                timeout={duration}
            >
                { status => {
                    return (
                        <div
                            className="questionBox"
                            style={setStyle("question")[status]}
                        >
                            <div className="questionBox__inner">
                                <p className="question__number"><img src={`https://s3-ap-northeast-1.amazonaws.com/amo-style-brands/test/fit/images/diagnosis/${item.name}.png`} alt={item.name} /></p>
                                <p className="question__text" dangerouslySetInnerHTML={{ __html: item.text }}/>
                                <ul className="option__list">
                                    {item.options.map((option, option_idx) => (
                                        <li key={option_idx} className="option__item" onClick={() => this.selectOption(question_index, option_idx)}>
                                            <div className={`__radio ${
                                                this.state[`q${question_index + 1}`] === String(option_idx + 1)
                                                ? '__selected'
                                                : ''
                                            }`}></div>
                                            <p className="__label">{option}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={`question__next ${this.state[`q${question_index + 1}`] !== '' ? 'active' : ''}`} onClick={() => this.nextStep( question_index + 1 )}>{item.buttonLabel || `NEXT`}</div>
                        </div>
                    )
                }}
            </Transition>
        ));

        return (
            <React.Fragment>
                {questions}
                <Transition
                    in={this.state.current === 3}
                    mountOnEnter
                    unmountOnExit
                    timeout={duration}
                >
                    { status => {
                        return (
                            <React.Fragment>
                                {this.state.current === 3 && (
                                    <div
                                    className="answerBox"
                                    style={setStyle("answer")[status]}
                                    >
                                        <img className="answerImage__pc" src={`https://s3-ap-northeast-1.amazonaws.com/amo-style-brands/test/fit/images/diagnosis/answer/answer_pc/A${this.state.q1}_${this.state.q2}_${this.state.q3}.png`} />
                                        <img className="answerImage__sp" src={`https://s3-ap-northeast-1.amazonaws.com/amo-style-brands/test/fit/images/diagnosis/answer/answer_sp/A${this.state.q1}_${this.state.q2}_${this.state.q3}.png`} />
                                        <div className="answerBox__link j-smooth-scroll-diagnosis" onClick={() => this.reset()}></div>
                                    </div>
                                )}
                            </React.Fragment>
                        )
                    }}
                </Transition>
            </React.Fragment>
        )
    }
}

export default App;