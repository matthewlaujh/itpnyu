// GLSLCanvas.js
import React, { Component } from 'react';
import { Shaders, Node, GLSL } from 'gl-react';
import { Surface } from 'gl-react-dom';

export default class GLSLCanvas extends Component {
  render() {
    const { shaderCode, width, height } = this.props;

    // Create shaders dynamically based on prop
    const shaders = Shaders.create({
      dynamicShader: {
        frag: GLSL`${shaderCode}`,
      },
    });

    return (
      <Surface width={width} height={height}>
        <Node shader={shaders.dynamicShader} />
      </Surface>
    );
  }
}
