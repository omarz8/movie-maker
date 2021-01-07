import React, { useCallback } from 'react'
import { useDropzone } from "react-dropzone";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const image = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      path
      id
      filename
      mimetype
    }
  }
`;

export default function Movie(props) {

    const [uploadFile] = useMutation(image);
    const onDrop = useCallback(
        (acceptedFiles) => {
            console.log(acceptedFiles);
            const file = acceptedFiles[0];
            uploadFile ({
                variables: { file },
                onCompleted: () => { },
            });
         },
        [uploadFile]
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    });
    return (
        <div className="card">
            <div className="container">
                {/* <img src={props.file} alt="" width="100%" height="230px" /> */}
                <div className= "image">
                <div {...getRootProps()} className={`dropzone ${isDragActive && "isActive"}`}>
                    <input {...getInputProps()}  />
                    {isDragActive ? <p>Drop the files here ...</p> : <p>Drag and drop some files here, or click to select files</p>}
                </div>
                </div>
                <h3>{props.name}</h3>
                <h4>{props.genre} - {props.year}</h4>
                {/* <h4>{props.file}</h4> */}

            </div>
        </div>
    )
}
