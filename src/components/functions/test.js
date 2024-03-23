import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            complexity: 10,
            efficiency: ''
        };
    }

    componentDidMount() {

        const efficiency = this.calculateCyclometricEfficiency(code);
        this.setState({ efficiency });
    }

  calculateCyclometricEfficiency(complexity)
  {
    let efficiency = '';

        if (complexity < 10){
            efficiency === 'Simple procedure, little risk'
        }
        else if (11< complexity && complexity >20 )
            { efficiency === 'More complex, moderate risk'
        }
        else if (21< complexity && complexity > 50)
            { efficiency === 'Complex, high risk'
        }
        else
            { efficiency === 'untestable code, very high risk'
        }

    return efficiency;

  }


    render() {
        return (
            <View>
                <Text>Complexity efficiency {this.state.efficiency}</Text>

            </View>
        );
    }
}