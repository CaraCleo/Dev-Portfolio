import Link from 'next/link';
import Layout from '../components/Layout.js';

export default function Contact() {
    return (
    <Layout>
        <div>
            <h1>Contact Me:</h1>
            <div className="phone">
            <h3>Phone:</h3>
            <img src="/static/PhoneIcon.png" alt="Phone icon"></img>
            <p>+264 81 441 6011</p>
            </div>
            <div className="email">
            <h3>Email:</h3>
            <img src="/static/EmailIcon.png" alt="Email icon"></img>
            <p>caraspall389@gmail.com</p>
            </div>
            <style jsx>
                {`
                div {
                    background-color: azure;
                    border: solid;
                    text-align: center;
                }
                img {
                    height: auto;
                    width: 10%;
                }
                a {
                    border: solid;
                    margin-left: 5px;
                    margin-top: 10px;
                    background-color: white;
                }
                .phone {
                    background-color: lavender;
                    margin-left: 5px;
                    margin-right: 5px;
                    margin-top: 5px;
                    margin-bottom: 5px
                }
                .email {
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