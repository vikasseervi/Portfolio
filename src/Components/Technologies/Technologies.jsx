import './Technologies.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Card from '../Card/Card'
import java from '../../assets/java.svg'
import spring from '../../assets/spring.svg'
import junit5 from '../../assets/junit5.png'
import react_js from '../../assets/react_js.png'
import html from '../../assets/html-5.png'
import css from '../../assets/css.png'
import javascript from '../../assets/javascript.png'
import mysql from '../../assets/mysql.svg'
import intellijIdea from '../../assets/intellij-Idea.png'
import vscode from '../../assets/vscode.png'
import git from '../../assets/git.png'
import github from '../../assets/github.png'
import postman from '../../assets/postman.png'

export default function Technologies() {
    
    return(
        <div className='technologies'>
            <div className="technologies-title">
                <h1>Technologies</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="section">
                <h2>Tech Stack</h2>
                <div className='technologies-section'>
                    <Card src={java} name={'Java'} />
                    <Card src={spring} name={'Spring Boot'} />
                    <Card src={junit5} name={'Junit5'}/>
                    <Card src={react_js} name={'ReactJs'} />
                    <Card src={html} name={'HTML'}/>
                    <Card src={css} name={'CSS'}/>
                    <Card src={javascript} name={'JavaScript'}/>
                    <Card src={mysql} name={'MySQL'}/>
                </div>

                <h2>Tools</h2>
                <div className='technologies-section'>
                    <Card src={intellijIdea} name={'IntelliJ Idea'} />
                    <Card src={vscode} name={'VS Code'}/>
                    <Card src={git} name={'Git'}/>
                    <Card src={github} name={'GitHub'}/>
                    <Card src={postman} name={'Postman'}/>
                </div>
            </div>
        </div>
    )
}