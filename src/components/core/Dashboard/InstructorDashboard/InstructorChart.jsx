import { useState } from "react"
import { Pie } from "react-chartjs-2"
import { Chart, registerables } from "chart.js"
import { fetchJobCategories } from "../../../../services/operations/jobDetailsAPI"
import { useEffect } from "react"


Chart.register(...registerables)

export default function InstructorChart() {
  
  const [loading, setLoading]=useState(false);
  const [currChart, setCurrChart] = useState("students")
  const [categories, setCategories]= useState("")
  const [categoryData, setCategoryData] = useState({});
  


  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      const categoriesResponse = await fetchJobCategories();
      // console.log(categoriesResponse);
  
      // Create an object where keys are categoryName and values are objects
      const categoryDataObject = {};
      categoriesResponse.forEach((category) => {
        categoryDataObject[category.name] = {
          totalJob: category.jobs.length,
        };
      });
  
      setCategoryData(categoryDataObject);
      setCategories(categoriesResponse);
      setLoading(false);
    };
  
    getCategories();
  }, []);

  // Function to generate random colors for the chart
  const generateRandomColors = (numColors) => {
    const colors = []
    for (let i = 0; i < numColors; i++) {
      const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`
      colors.push(color)
    }
    return colors
  }

  // this is sample data 
  const courses = [
    { categoriesName: 'categories 1', totalJob: 100, totalAmountGenerated: 500 },
    { categoriesName: 'categories 2', totalJob: 150, totalAmountGenerated: 750 },
    { categoriesName: 'categories 3', totalJob: 120, totalAmountGenerated: 600 },
    // Add more courses as needed
  ];


  const chartDataStudents = {
    labels: Object.keys(categoryData),
    datasets: [
      {
        data: Object.values(categoryData).map((course) => course.totalJob),
        backgroundColor: generateRandomColors(Object.keys(categoryData).length),
      },
    ],
  };

  // Data for the chart displaying income information
  const chartIncomeData = {
    labels: courses.map((course) => course.categoriesName),
    datasets: [
      {
        data: courses.map((course) => course.totalAmountGenerated),
        backgroundColor: generateRandomColors(courses.length),
      },
    ],
  }

  // Options for the chart
  const options = {
    maintainAspectRatio: false,
  }

  return (
    <div className="flex flex-1 flex-col gap-y-4 rounded-md  bg-white border border-blueMain p-6">
      <p className="text-lg font-bold text-black">Visualize</p>
      <div className="space-x-4 font-semibold">
        {/* Button to switch to the "students" chart */}
        <button
          onClick={() => setCurrChart("students")}
          className={`rounded-sm cursor-default p-1 px-3 transition-all duration-200 ${
            currChart === "students"
              ? " bg-richwhite text-blueMain"
              : " text-black"
          }`}
        >
          Jobs
        </button>
        {/* Button to switch to the "income" chart */}

        {/* <button
          onClick={() => setCurrChart("income")}
          className={`rounded-sm p-1 px-3 transition-all duration-200 ${
            currChart === "income"
              ? " bg-richwhite text-caribbeangreen-200"
              : "text-blueMain"
          }`}
        >
          Income
        </button> */}
      </div>
      <div className="relative mx-auto aspect-square h-full w-full">
        {/* Render the Pie chart based on the selected chart */}
        <Pie
          data={currChart === "students" ? chartDataStudents : chartIncomeData}
          options={options}
        />
      </div>
    </div>
  )
}
