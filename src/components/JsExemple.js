const user = {
    firtsName: 'Utilisateur',
    lastName: 'de test'
}

function FormatName(user) {
    return user.firtsName + ' ' + user.lastName
}

const JsxExemple = () =>{
    return (
        <>
            <p>Coucou {FormatName(user)}</p>
        </>
    )
}

export default JsxExemple;