**MULTIMEDIA-BUILDER**

The two features I added to my multimedia app are;
1. **Password Protection of individual files.** This feature is meant to secure a sensitive file you want to keep away from anyone else, assuming you are sharing this app with other users. Each file can be protected with a different or unique password. And each user can choose to secure his/her file.

2. **Modal View display of the Files.** This feature is to practice what was taught to us in the Quest 1 of this campaign. When the user clicks on the View button, the file will be displayed on a Modal view, just like in the photo-gallery-app. The file when protected will prompt the user for a password before it displays the content of the file. I had to remove the fileViewer that displays the files at the side when a file is selected to make the usefulness of my added features stand out. The reason for this feature to give an elaborate display of the selected file. Also, the user can watch videos clearly without necessarily entering into the fullscreen mode.

**How my code works.**

**** Password Protection of individual files.** **
The Protect button allows the user to set a password for a selected file.
 const handleProtectFile = () => {
  const password = prompt("Enter password to protect this file:");  
  if (password) {    
   setSelectedFile({ 
    ...selectedFile,
    isProtected: true,     
    password: password
   });    
  }
}

Check Password is used to ensure the provided password matches what was set initially, else, prompt the user that the password is incorrect,
const checkPassword = () => {
  const enteredPassword = prompt("Enter password to view file:"); 
  if (enteredPassword === selectedFile.password) {   
    // Show modal    
    setShowModal(true);  
    setSelectedContent(selectedFile);  
  } else {
    alert("Incorrect password!")  
  }
}

If the password check is successful, then you can display on the modal View.
const handleViewProtected = () => {
  if (selectedFile) { 
    if (selectedFile.isProtected) {
      checkPassword();
    } else {
      setShowModal(true); 
      setSelectedContent(selectedFile);  
    }
  }
}

**The modal View**
 {showModal && (
    <div style={styles.modal}>
     <div style={styles.Mcontainer}>
      <div style={styles.modalHeader}>
       <p style={{ fontWeight: "bold" }}>Modal View</p>
       <button style={styles.closeMButton} onClick={() => setShowModal(false)}>close</button>
      </div>

      
        { ( 
        <div style={styles.fContainer}>
          
          {selectedFile.type === 'video' && (
          <VideoPlayer path={selectedFile.path} />
          )}
          {selectedFile.type === 'audio' && (
          <AudioPlayer path={selectedFile.path} />
          )}
          {selectedFile.type === 'document' && (
          <DocumentViewer path={selectedFile.path} />
          )}
          {selectedFile.type === 'image' && (
          <ImageViewer path={selectedFile.path} />
          
          )}
          
          <p style={{ fontWeight: "bold", marginTop: 10 }}>{selectedFile.name}</p>
          <p>path: <span style={{ fontStyle: "italic" }}>{selectedFile.path}</span></p>
          <p>file type: <span style={{fontStyle: "italic"}}>{selectedFile.type}</span></p>
        </div>
			
  
        )}
        

      
      </div>
      </div>

      )}
I customized this from the photo-gallery-app, to ensure a matching background for the modal View, the close button, and to ensure that all the elements are centered correctly.

closeMButton: {
    padding: '10px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    backgroundColor: '#fff',
  },
  fContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    cursor: 'pointer',
  },
  f: {
    width: '300px',
    height: '300px',
    objectFit: 'cover',
  },
  fDescription: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
    height: '50px',
    backgroundColor: '#000000',
    opacity: '0.5',
  },
  fDescriptionText: {
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  imagecontainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 50,
    maxWidth: "60vw"
  },
  Mcontainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    alignContent: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 10,
    maxWidth: "60vw"
  },
};
