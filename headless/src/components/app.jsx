import React from 'react'
import { connect } from 'react-redux'

class App extends React.Component {
    render() {
        return <div>
            Content.
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
