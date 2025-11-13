export const SlideUp=(delay)=>{
    return{
        hidden:{
            opacity:0,
            y:100,
        },
        visible:{
            opacity:1,
            y:0,
            transition:{
                duration:0.4,
                delay:delay
            },
        },
    };
};
export const SlideLeft=(delay)=>{
    return{
        hidden:{
            opacity:0,
            x:100,
        },
        visible:{
            opacity:1,
            x:0,
            transition:{
                duration:1,
                delay:delay
            },
        },
    };
};
export const SlideRight=(delay)=>{
    return{
        hidden:{
            opacity:0,
            x:-100,
        },
        visible:{
            opacity:1,
            x:0,
            transition:{
                duration:1,
                delay:delay
            },
        },
    };
};
export const HeroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};