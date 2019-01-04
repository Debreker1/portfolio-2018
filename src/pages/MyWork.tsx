import * as React from 'react';
import Header from 'src/components/Header';
import WorkElement from '../components/WorkElement';
import { projects } from '../Models';

const listItems = projects.map((project, index) => <WorkElement project={project} key={index}/>)

class MyWork extends React.Component
{
    public render()
    {
        return (
            <div>
                <Header headerText="Mijn Werk" />
                <div className="row">
                    <ul className="small-block-grid-3">
                        {listItems}
                    </ul>
                </div>
            </div>
        )
    }
}

export default MyWork