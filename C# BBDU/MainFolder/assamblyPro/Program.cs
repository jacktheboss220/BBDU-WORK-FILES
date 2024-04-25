using System;
using assamblyTest;

namespace assamblyPro
{
    class Program
    {
        public static void Main(string[] args)
        {
            assamblyTest.Utility utility = new assamblyTest.Utility();
            Console.WriteLine(utility.Sum(10, 20));
            Console.WriteLine(utility.Sub(10, 20));
        }
    }
}
