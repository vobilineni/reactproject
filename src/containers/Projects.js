import React, { Component } from 'react';
import uuid from 'uuid';
import ProjectUpdate from '../components/project/ProjectUpdate';
import AddProject from '../components/project/AddProject';
import '../styles/App.css';

class Projects extends Component {
  constructor(){
    super();
    this.state = {
      projects:[]
    }
  }
  componentWillMount(){
    this.setState({projects:[
      {
        id:uuid.v4(),
        title: 'Business Website',
        category: 'web Design'
      },
      {
        id:uuid.v4(),
        title: 'Socal App',
        category: 'Mobile Development'
      },
      {
        id:uuid.v4(),
        title: 'Ecommerce Shipping Cart',
        category: 'web Development'
      }
    ]});
  }
  handleAddProject(project){
    //console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({Projects:projects});
  }
  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  }
  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <ProjectUpdate projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
      </div>
    );
  }
}
export default Projects;
