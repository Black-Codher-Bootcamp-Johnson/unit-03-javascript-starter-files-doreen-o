// function getGrade(total){
//     console.log(total)
//     if(total > 90){
//     console.log("Youre grade is A+");
//     } else if (total > 80 && total<= 90){
//         console.log("You're grade is A")
//         }else if (total > 70 && total<= 80){
//             console.log("You're grade is B")
//             }else if (total > 60 && total<= 70){
//                 console.log("You're grade is C")
//                 }else if (total > 50 && total<= 60){
//                     console.log("You're grade is D")
//                     }else if (total > 40 && total<= 50){
//                         console.log("You're grade is E")
//                         }else if (total > 30 && total<= 40){
//                             console.log("You're grade is F")
//                             }else if (total< 30){
//                                 console.log("You're grade is Fail")
//                                 }
// }
// getGrade(55)

function getGrade(total){
// let total;
    switch (true){
    case (total >90):
    console.log("Youre grade is A+")
    break;
        case (total > 80):
        console.log("You're grade is A")
        break;
        case(total > 70):
            console.log("You're grade is B")
            break;
            case (total > 60):
                console.log("You're grade is C")
                break;
                case (total > 50):
                    console.log("You're grade is D")
                    break;
                    case (total > 40):
                        console.log("You're grade is E")
                        break;
                        case (total > 30):
                            console.log("You're grade is F")
                            break;
                            default:
                                console.log("You're grade is Fail")
                        }
                    }