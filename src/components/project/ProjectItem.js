import React, {Component} from 'react';

class ProjectItem extends Component {
  deleteProject(id) {
    this.props.onDelete(id);
    //console.log("test");

  }

  render() {

    return <div>

      {/*<div>
                    <li className="Project">
                        <strong>{this.props.project.title}</strong>: {this.props.project.category} <a href=""
                                                                                                      onClick={this.deleteProject.bind(this, this.props.project.id)}>Delete</a>
                    </li>
                </div>*/}
      <div>
        <li className="Project">
          {/*<strong>{this.props.project.title}</strong>: {this.props.project.category}
                    <button className="danger" onClick={this.deleteProject.bind(this, this.props.project.id)}>
                        Delete
                    </button>*/}
          <strong>{this.props.project.title}</strong>: {this.props.project.category}<a href="#"
                                                                                       onClick={this.deleteProject.bind(this, this.props.project.id)}>Delete</a>
        </li>
      </div>
    </div>;
  }
}

export default ProjectItem;
