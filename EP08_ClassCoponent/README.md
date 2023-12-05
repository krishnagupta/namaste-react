# React Life Cycle

Q. first costructor is called the reder is called whe class load
Q. parent const parent render child cons child render is called
Q. constructor render componentdidmount
Q. parent cons parent render child cons child render child didmount parent didmount
Q. render phase is batched together and commit phase together
Q. parent const parent render first child cons first child render second child cons second child render first child didmount second child didmount bcz dom manipulation is expensive and render phase is fast than commit phase
Q. compdidupdate will be called after every render
Q. comp willunmount is called when we are leaving page
Q. why we pass props in constructor and super
Q. why we can't use async in useeffect but we can in didmount
