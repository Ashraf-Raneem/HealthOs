export const returnInitials = (name) => {
    let nameArray = name.split("");
    let initials = " ";
    nameArray.forEach(el => {
        if (el === el.toUpperCase()){
            initials = initials+el;
        }
    })
    return initials;
}