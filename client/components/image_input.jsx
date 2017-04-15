import React from 'react';
import Dropzone from 'react-dropzone';
import { read } from '../utils/file';
import AvatarEditor from 'react-avatar-editor';
import {translate} from '../utils/translate';
import { Image } from '../utils/cloudinary';

class ImageInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      raw: null,
      cropped: null,
      edit: true,
    };
    this.onDrop = this.onDrop.bind(this);
    this.setCropped = this.setCropped.bind(this);
    this.reset = this.reset.bind(this);
  }
  reset () {
    this.setState({ raw: null, cropped: null });
  }
  onDrop(acceptedFiles, rejectedFiles) {
    read(acceptedFiles[0], raw => { this.setState({ raw }) });
  }
  setCropped(e) {
    if (e && e.preventDefault());

    this.cropped.getImageScaledToCanvas().toBlob( blob => {
      read(blob, cropped => {
        this.setState(
          { cropped }, 
          () => this.props.onChange({ 
            preventDefault: ()=>{},
            currentTarget: { value: this.state.cropped } 
          }),
        );
      });
    });
  }
  dropZone() {
    const { tr } = this.props;

    return(
      <Dropzone onDrop={this.onDrop}>
        <div>{tr("edit_thumbnail")}</div>
      </Dropzone>
    );
  }
  editor(){
    return(
      <div>
        <AvatarEditor
          ref={c => c ? this.cropped = c : null}
          image={this.state.raw}
          width={250}
          height={250}
          border={50}
          color={[255, 255, 255, 0.6]} // RGBA 
          scale={1.2}
          rotate={0}
        /> 
        <button onClick={this.setCropped}>OK</button>
      </div>
    );
  }
  thumbnail() {
    const { tr } = this.props;
    const { cropped } = this.state;
    return (
      <div>
        <img src={cropped} />
        <button onClick={this.reset}>{tr("remove")}</button>
      </div>
    );
  }
  render() {
    const { raw, cropped } = this.state;

    let content;

    if (cropped) {
      content = this.thumbnail();
    } else if (!raw && !cropped) {
      content = this.dropZone();
    } else if (!cropped) {
      content = this.editor();
    }

    return (
      <div className="image-upload-input">
        {content}
      </div>
    );
  }
}

export default translate("Form")(ImageInput);