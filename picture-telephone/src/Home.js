import React from 'react'
import './App.css';
import { StyleSheet, css } from 'aphrodite';

// class NameForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: ''};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//       alert('A name was submitted: ' + this.state.value);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name:
//             <input type="text" value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }
{/* <div>
        <h2>Home</h2>
        <p>This is my Home page</p>
    </div> */}

const styles = StyleSheet.create({
    container: {
        height: '100vh'
    },
    content: {
        marginTop: 54
    },
    mainBlock: {
        backgroundColor: '#F7F8FC',
        padding: 30
    }
  });

// export const Home = () => (
//     // <Row className={css(styles.container)}>
//     //     {/* <SidebarComponent selectedItem={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })} /> */}
//     //     <Column flexGrow={1} className={css(styles.mainBlock)}>
//     //         {/* <HeaderComponent title={selectedItem} /> */}
//     //         <div className={css(styles.content)}>
//     //             <span>Content</span>
//     //         </div>
//     //     </Column>
//     // </Row>
//     // <HomeComponent />
// )