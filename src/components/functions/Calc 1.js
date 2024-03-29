import React from 'react';

// Current issue with calculating edges.
const Calc = ({ code, onResults }) => {
  const calculateEdges = () => {
    // let edges = code.split('\n').length;
    // console.log(edges);
    // console.log(code);
    // return edges;

    // return code.split('\n').length; <- Original, incorrect.

    // const keywords = ['if', 'else', 'while', 'for', 'switch', 'case', 'function', 'do',  'foreach', 'elif', 'continue', 'break', 'public static void main'];
    const keywords = ['if', 'else', 'while', 'for', 'switch', 'case', 'function', 'do', 'foreach', 'elif', 'public static void main'];
    let count = 0;
    // Start to end edge.
    keywords.forEach((keyword) => {
      if (keyword === 'if' || keyword === 'else') {
        count += (code.match(new RegExp(keyword, 'g')) || []).length;
      } else {
        count += (code.match(new RegExp(keyword, 'g')) || []).length;
      }
    });

    if (count == 0) {
      return 1;
    }
    return count + 1;
  };

  const calculateNodes = () => {
    // Changed to include PSVM as it is a main entry point.
    // const keywords = ['if', 'else', 'while', 'for', 'switch', 'case', 'function', 'do', 'foreach', 'elif', 'continue', 'break', 'public static void main'];
    const keywords = ['if', 'else', 'while', 'for', 'switch', 'case', 'function', 'do', 'foreach', 'elif', 'public static void main'];
    let count = 0;

    // Original.
    // keywords.forEach((keyword) => {
      //   count += (code.match(new RegExp(keyword, 'g')) || []).length;
      // });

    // New. Will read line by line to account for else if and psvm
    let lines = code.split('\n');
    lines.forEach((line) => {
      if (line.includes('if') && line.includes('else')) {
        count++;
      } else {
        keywords.forEach((keyword) => {
          if (line.includes(keyword)) {
            count++;
          }
        });
      }
    });
    return count;
  };

  // Correct to some degree.
  // Need to change where it would read any called components.
  // E.g., a function is called in the main method. count++.
  const calculateComponents = () => {
    const keywords = ['function', 'public static', 'public void', 'private void', 'protected void'];
    const dataTypes = ['int', 'float', 'double', 'char', 'string', 'bool'];
    let count = 0;
    let lines = code.split('\n');
    lines.forEach((line) => {
      if (!line.includes('class')) {
        keywords.forEach((keyword) => {
          if (line.includes(keyword)) {
            count+=1;
          }
        });
      }
    });
    return count;
  };

  const calculateCyclomaticComplexity = (E, N, P) => {
    return E - N + 2 * P;
  };

  const calculate = () => {
    const E = calculateEdges();
    const N = calculateNodes();
    const P = calculateComponents();
    const M = calculateCyclomaticComplexity(E, N, P);

    onResults({ E, N, P, M });
  };

  React.useEffect(() => {
    calculate();
  }, [code]);

  return null;
};

export default Calc;
