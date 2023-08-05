import { Aboutme } from "./AboutMe";
import { Myservice } from "./Myservice";
// import { Testimonial } from "./Testimonials";
// import { MyPlan } from "./Plan";
import { Nav } from "../Home/NavHome";

export function Aboutone(){
    return(
        <div>
             <Aboutme></Aboutme>
            <Myservice></Myservice>
            {/* <Testimonial></Testimonial>
            <MyPlan></MyPlan> */}
        </div>
    )
}