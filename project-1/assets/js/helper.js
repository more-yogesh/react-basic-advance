function SetName(gender, name) {
    let selute = gender === 'male' ? 'Mr. ' : 'Miss';
    return selute + ' ' + name.toUpperCase();
}

export default SetName;