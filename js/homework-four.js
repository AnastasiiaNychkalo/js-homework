// Task №1
function sumSliceArray(arr, first, second) {
    if (!Array.isArray(arr)) {
        throw new Error('Input should be an array');
    }

    if (typeof first !== 'number' || typeof second !== 'number') {
        throw new Error('Indexes should be numbers');
    }

    if (first < 0 || second < 0 || first >= arr.length || second >= arr.length) {
        throw new Error('Indexes are out of range');
    }

    return arr[first] + arr[second];
}

// Task №2
function checkAge() {
    try {
        const name = prompt("Enter your name:");
        if (!name) {
            throw new Error("The field is empty! Please enter your name");
        }

        const age = parseInt(prompt("Enter your age:"));
        if (isNaN(age)) {
            throw new Error("Invalid age input. Please enter a valid number");
        }

        if (age < 18 || age > 70) {
            throw new RangeError("Not for your age.");
        }

        const status = prompt("Enter your status (admin, moderator, user):");
        if (status !== "admin" && status !== "moderator" && status !== "user") {
            throw new EvalError("Invalid status input. Please enter a valid status");
        }

        alert("You have access to watch the movie!");
    } catch (error) {
        alert("Error: " + error.name + "\nDescription: " + error.message);
    }
}

checkAge();

// Task №3
function calcRectangleArea(width, height) {
    if (typeof width !== 'number' || typeof height !== 'number') {
        throw new Error("Both width and height must be numeric values");
    }

    return width * height;
}

try {
    const widthInput = prompt("Enter the width of the rectangle:");
    const heightInput = prompt("Enter the height of the rectangle:");

    const width = parseFloat(widthInput);
    const height = parseFloat(heightInput);

    if (isNaN(width) || isNaN(height)) {
        throw new Error("Invalid input. Both width and height must be valid numbers");
    }

    const area = calcRectangleArea(width, height);
    alert("The area of the rectangle is: " + area);
} catch (error) {
    alert("Error: " + error.message);
}

// Task №4

// Task №5
function showUser(id) {
    if (id < 0) {
        throw new Error("ID cannot be negative");
    }
    
    return { id };
}

function showUsers(ids) {
    const users = [];
    
    ids.forEach(id => {
        try {
            const user = showUser(id);
            users.push(user);
        } catch (error) {
            console.error(error.message);
        }
    });
    
    return users;
}
