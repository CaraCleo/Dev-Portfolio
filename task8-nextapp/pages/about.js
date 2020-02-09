import Link from 'next/link';
import Layout from '../components/Layout.js';

export default function About() {
    return (
        <Layout>
        <div>
            <h1>About Me</h1>
            <p>My name is Cara, I am 23 years-old and I come from Windhoek, Namibia. 
            I have an Honours degree in Film Studies from the University of Cape Town, but I am currently
            working as a copywriter and marketing consultant for a company called Prosperity Group. 
            I decided to pursue web development in order to broaden my skills. 
            </p>
            <img src="/Static/Epupa.jpg" alt="Photo of Cara"></img>
            <div className="education">
            <h3>Education</h3>
            <ul>
                <li>2018: University of Cape Town, Honours specialising in Film and Television Studies.</li>
                <li>2015-2017: University of Cape Town, BA majoring in French Literature, Chinese Studies and 
                    Film Studies.
                </li>
                <li>2010-2014: St Paul's College Namibia, highschool.</li>
            </ul>
            </div>
            <div className="experience">
                <h3>Work Experience</h3>
            <ul>
                <li>July 2019-Present: Copywriter and Marketing Consultant at Prosperity Group Namibia (full-time)</li>
                <li>January 2019-June 2019: Project Assistant at Binneman Visser Chartered Accountants (part-time)</li>
                <li>February 2018-October 2018: Telebutler at Butler's Pizza (part-time)</li>
                <li>October 2016-November 2018: Waitron/hostess at Ottimo Cibo (part-time)</li>
                <li>March 2015-November 2018: French tutor at Centre of Hope (part-time)</li>
            </ul>
            </div>
            <br></br>
            <style jsx>
                {`
                div {
                    background-color: azure;
                    border: solid;
                    text-align: center;
                }
                img {
                    height: auto;
                    width: 25%
                }
                a {
                    border: solid;
                    margin-left: 5px;
                    margin-top: 10px;
                    background-color: white;
                }
                .education {
                    background-color: lavender;
                    margin-left: 5px;
                    margin-right: 5px;
                    margin-top: 5px;
                    margin-bottom: 5px
                }
                .experience {
                    background-color: mistyrose;
                    margin-left: 5px;
                    margin-right: 5px;
                    margin-top: 5px;
                    margin-bottom: 5px
                }
                `}
            </style>
        </div>
        </Layout>
    );
}