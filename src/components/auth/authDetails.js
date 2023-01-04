import React from 'react'
import { auth } from '../../firebase'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { faRightFromBracket  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom';





function AuthDetails() {

    const [authUser, setAuthUser] = React.useState(null);

    const navigate = useNavigate();


    React.useEffect(()=>{
        const listen = onAuthStateChanged(auth, (user)=>{
            if (user) {
                setAuthUser(user);
              } else {
                setAuthUser(null);
              }
        })

        return () => {
            listen();
          };

    },[])


    function handleSignOut(){
        signOut(auth)
      .then(() => {
        console.log("sign out successful")
        navigate("/")
      })
      .catch((error) => console.log(error));
    }

  return (
    <div>
      {authUser ? (
        <>
          <div className='sidebarOptions' onClick={handleSignOut}>
            <FontAwesomeIcon icon={ faRightFromBracket }/> 
            <h2>SIGN OUT</h2>
          </div>

          <p>{`Signed In as ${authUser.email}`}</p>
        </>
      ) : (
        <div className='sidebarOptions' onClick={handleSignOut}>
        <FontAwesomeIcon icon={ faRightFromBracket }/> 
        <h2>SIGN OUT</h2>
        </div>
      )}
    </div>
  )
}

export default AuthDetails;



