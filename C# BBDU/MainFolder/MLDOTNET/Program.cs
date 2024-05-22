using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MLDOTNET
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Load sample data
            var sampleData = new MLModel1.ModelInput()
            {
                Col0 = @"Good case, Excellent value.",
            };

            //Load model and predict output
            var result = MLModel1.Predict(sampleData);

            //Print output
            Console.WriteLine($"Col0: {sampleData.Col0}");
            Console.WriteLine($"Col1: {sampleData.Col1}");
            Console.WriteLine($"Prediction: {result.PredictedLabel}");
            Console.WriteLine($"Probability: {result.Score.Max() * 100}%");

            Console.ReadLine();

        }
    }
}
