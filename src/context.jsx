import React, { Component } from 'react'
import { data } from './dataApocalypse';

const ProjectContext = React.createContext();

 class ProjectProvider extends Component {
    state = {
        projects: []
    }

    componentDidMount(){
        let projects = this.formatData(data)
        // console.log(projects);
        this.setState({
            projects,
        })
    }

    formatData(data){
        let tempData = data.map(data =>{
            // let id = data.id
            // let images= data.image
            let project = {...data};
            return project
        })
        return tempData;
    }

    getProject = slug =>{
        let tempProject = [...this.state.projects];
        const project= tempProject.find((project) => project.slug === slug);
        return project;
    }

    render() {
        return (
            <ProjectContext.Provider 
            value={{ 
                ...this.state,
                getProject: this.getProject
                }}
                >
                {this.props.children}
            </ProjectContext.Provider>
                
        )
    }
}

const ProjectConsumer = ProjectContext.Consumer;

export { ProjectProvider, ProjectConsumer, ProjectContext }

// HIGH ORDER COMPONENT

export function withProjectConsumer(Component){
    return function ConsumerWrapper(props){
        return <ProjectConsumer>
            { value => <Component {...props} context={value}/>}
        </ProjectConsumer>
    }
}