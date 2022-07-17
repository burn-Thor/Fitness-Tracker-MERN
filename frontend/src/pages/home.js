import {useEffect, useState} from 'react'
import WorkoutDetails from '../components/workoutDetails'
import WorkoutForm from '../components/workoutForm'

const Home = () => {
const [workouts, setWorkouts] = useState(null)


useEffect(() => {
    const fetchWorkouts = async () => {
        const response = await fetch('/api/workouts')
        
        //parse JSON into something we can work with ⏬ , an array of objects with each object a workout
        const json = await response.json()

        if(response.ok) {
            setWorkouts(json)
        }
    }

    fetchWorkouts()

}, [])

    return(
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout)=> (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home