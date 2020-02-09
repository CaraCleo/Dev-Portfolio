import Link from 'next/link';
import Layout from '../components/Layout.js';

export default function Projects() {
    return (
        <Layout>
        <div>
            <div className="projOne">
                <h1>Developer Projects</h1>
                <h3>Project 1: Online Art Store</h3>
                <p>In this project, I had to create an online store, which I chose to make an art 
                store. This was created with HTML, CSS and Vanilla JavaScript.
                </p>
            </div>
            <div className="projTwo">
                <h3>Project 2: React Game</h3>
                <p>In this project, we had to create a game using react. I created the game '2048',
                    which is a game that adds numbers up in specific sequences. 
                    Click on this link to play the game:
                </p>
                <Link href="https://secret-lowlands-01396.herokuapp.com/"><a>2048 on Heroku</a></Link>
            </div>
            <div className="projThree">
                <h3>Project 3: iTunes Search App</h3>
                <p>This project was a full-stack web application, using react and express. The app makes use of the
                    iTunes API to search for music. 
                </p>
            </div>
            <style jsx>
                {`
                div {
                    background-color: azure;
                    border: solid;
                    text-align: center;
                }
                a {
                    border: solid;
                    margin-left: 5px;
                    margin-top: 10px;
                    background-color: white;
                }
                .projTwo {
                    background-color: lavender;
                }
                .projThree {
                    background-color: mistyrose;
                }
                `}
            </style>
        </div>
        </Layout>
    );
}