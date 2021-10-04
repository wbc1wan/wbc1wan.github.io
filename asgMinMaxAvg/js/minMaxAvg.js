console.clear()
        
                function minMaxAvg(){
                    let arr = [1,2,3,4,5]
                    let sum = 0
                    
                    console.log("List of numbers is : " +arr)
                    console.log("Max Number is : " + Math.max(...arr))
                    console.log("Min Number is : " + Math.min(...arr))
                
                    for (let i = 0; i < arr.length; i++) {        
                        sum += arr[i];     
                    }
                
                    let avg = sum / arr.length;      
                    console.log("Average Number is : " + avg)

                    document.write("For List Number of : " +"<b>" + arr +"</b>")
                    document.write("<br> Maximum Number is &nbsp: " +Math.max(...arr))
                    document.write("<br> Smallest Number is : " +Math.min(...arr))
                    document.write("<br> Average is : " +avg)
                }
                minMaxAvg()