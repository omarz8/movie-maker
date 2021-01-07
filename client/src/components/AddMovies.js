import React, { useState } from 'react';
// import { useDropzone } from "react-dropzone";
import { useMutation } from '@apollo/client';
import ADD_MOVIE from '../apollo/mutations';
import allMovies from '../apollo/queries';


export default function AddMovies() {


    const [addMovie, { data }] = useMutation(ADD_MOVIE);
    console.log(data);

    // const onDrop = useCallback(
    //     (acceptedFiles) => {
    //         console.log(acceptedFiles);
    //         // select the first file from the Array of files
    //         const file = acceptedFiles[0];
    //         // use the uploadFile variable created earlier
    //         addMovie({
    //             // use the variables option so that you can pass in the file we got above
    //             variables: { file },
    //             onCompleted: () => { },
    //         });
    //     },
    //     // pass in uploadFile as a dependency
    //     [addMovie]
    // );
    // const { getRootProps, getInputProps, isDragActive } = useDropzone({
    //     onDrop,
    // });

    const [name, setName] = useState('')
    const [genre, setGenre] = useState('')
    const [year, setYear] = useState('')
    // const [file, setFile] = useState('')

    const submitMovie = (e) => {
        e.preventDefault();
        addMovie({
            variables: {
                name,
                genre,
                year, 
                // file
            },
            refetchQueries: [{ query: allMovies }]
        })
    }
    return (
        <div className="addMovie" id="form">
            <form onSubmit={submitMovie}>
                <label>Name</label>
                <input type="text" required onChange={(e) => setName(e.target.value)} />
                <label>Genre</label>
                <input type="text" required onChange={(e) => setGenre(e.target.value)} />
                <label>Year</label>
                <input type="text" placeholder="(optional)" onChange={(e) => setYear(e.target.value)} />
                {/* <label>Image</label> */}
                {/* <div {...getRootProps()} className={`dropzone ${isDragActive && "isActive"}`}>
                    <input {...getInputProps()} tye="file" onChange={(e)=> setFile(e.target.files)} />
                    {isDragActive ? <p>Drop the files here ...</p> : <p>Drag 'n' drop some files here, or click to select files</p>}
                </div> */}
                <button type="submit">Add Movie</button>
            </form>
        </div>
    )
}
