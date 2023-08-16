
const validate = (form) => {
    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/;//Verifica si solo contiene letras(Mayusculas y minusculas) y solo espacios 
    const regexURL = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;//Busca coincidencias con URLs de imágenes en formatos .jpg, .gif y .png.
    const regexNumber = /^[0-9]+$/;//Verifica si una cadena contiene solo números

    let errors = {}

    //Image
    if (!form.image) {
        errors.image = "Image is required"
    } else if (!regexURL.test(form.image)) {
        errors.image = "The URL entered is incorrect"
    } else {
        errors.image = ""
    }

    //Name
    if (!form.name) {
      errors.name = "Name is required";
    } else if (!regexName.test(form.name)){
        errors.name = "The name must only contain letters and spaces";
    } else {
        errors.name = "";
    }

    //Minimum Height
    if (!form.minHeight) {
        errors.minHeight = "Minimum Height is required";
    } else if (!regexNumber.test(form.minHeight)) {
        errors.minHeight = "The height should be a number";
    } else if (parseInt(form.minHeight) <= 0 || parseInt(form.minHeight) >= parseInt(form.maxHeight)) {
        errors.minHeight = "Minimum height should be greater than 0 and less than maximum height";
    } else if (parseInt(form.minHeight) > 100) {
        errors.minHeight = "The minimum height must be between 1 and 99 centimeters";
    } else {
        errors.minHeight = "";
    }
    
    //Maximum Height
    if (!form.maxHeight) {
        errors.maxHeight = "Maximum height is required";
    } else if (!regexNumber.test(form.maxHeight)) {
        errors.maxHeight = "The height should be a number";
    } else if (parseInt(form.maxHeight) <= 0 || parseInt(form.minHeight) >= parseInt(form.maxHeight)) {
        errors.maxHeight = "Maximum height should be greater than the minimum height and greater than 0";
    } else if (parseInt(form.maxHeight) > 100) {
        errors.maxHeight = "The maximum height must be between 2 and 99 centimeters";
    } else {
        errors.maxHeight = "";
    }

    //Minimum Weight
    if (!form.minWeight) {
        errors.minWeight = "Minimum weight is required";
    } else if (!regexNumber.test(form.minWeight)) {
        errors.minWeight = "The weight should be a number";
    } else if (parseInt(form.minWeight) <= 0 || parseInt(form.minWeight) >= parseInt(form.maxWeight)) {
        errors.minWeight = "Minimum weight should be greater than 0 and less than maximum wight";
    } else if (parseInt(form.minWeight) > 100) {
        errors.minWeight = "The minimum weight must be between 1 kg and 99 kg";
    } else {
        errors.minWeight = "";
    }

    //Maximum Weight
    if (!form.maxWeight) {
        errors.maxWeight = "Maximum weight is required";
    } else if (!regexNumber.test(form.maxWeight)) {
        errors.maxWeight = "The weight should be a number";
    } else if (parseInt(form.maxWeight) <= 0 || parseInt(form.minWeight) >= parseInt(form.maxWeight)) {
        errors.maxWeight = "Maximum weight should be greater than the minimum weight and greater than 0";;
    } else if (parseInt(form.maxWeight) > 100) {
        errors.maxWeight = "The maximum weight must be between 1 kg and 99 kg";
    } else {
        errors.maxWeight = "";
    }

    //Life Span
    if (!form.lifeSpan) {
        errors.lifeSpan = "Life span is required";
    } else if (!regexNumber.test(form.lifeSpan)) {
        errors.lifeSpan = "Life span should be a number";
    } else if (parseInt(form.lifeSpan) > 30) {
        errors.lifeSpan = "The life span must be between 1 and 30 years"// "The life span cannot exceed 20 years";
    } else {
        errors.lifeSpan = "";
    }

    // //Temperaments
    // if (!form.temperaments.length) {
    //     errors.temperaments = "The breed must have at least one temperament";
    //   } else {
    //     errors.temperaments = "";
    // }

    return errors
}


export default validate;

