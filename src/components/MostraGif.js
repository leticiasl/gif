import React, { Component } from 'react';


class MostraGif extends Component {
    state = {
        showGif: false
    }

    mostraGif = () => {
        this.setState({ showGif: true })
    }
    escondeGif = () => {
        this.setState({ showGif: false })
    }

    render() {
        return (
            <div className = "gif-container">
                <div>
                    <button onClick={this.mostraGif}>Mostra o Gif</button>
                    <br></br>
                    <button onClick={this.escondeGif}>Esconde o Gif</button>
                </div>
                <br></br>
                {this.state.showGif === true &&
                    <img src="https://img.buzzfeed.com/buzzfeed-static/static/2015-11/2/11/enhanced/webdr09/anigif_enhan
ced-21208-1446481436-2.gif" alt="Gif" />}
            </div>
        );
    }
}
export default MostraGif