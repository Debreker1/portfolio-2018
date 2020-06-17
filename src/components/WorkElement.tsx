import * as React from 'react'
import { Project } from '../Models'

interface IProps
{
    project: Project,
    key: number
}

class WorkElement extends React.Component<IProps>
{
    constructor(props: IProps)
    {
        super(props)
    }

    public render()
    {
        return(
            <li key={this.props.key}>
                <a href={this.props.project.link} className="wrapper" target="__blank"><span className="myWorkText"><strong>{this.props.project.header}</strong>
                <p>
                    {this.props.project.body}
                </p></span>
                {/* <img src={"img/mywork/" + this.props.project.img} className="thumbnail"/> */}
                </a>
            </li>
        )
    }
}

export default WorkElement