using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace comparisonOverloading
{
    internal class Program
    {
        public int x;

        public Program(int x)
        {
            this.x = x;
        }

        public static bool operator >(Program a, Program b)
        {
            return a.x == b.x;
        }

        public static bool operator <(Program a, Program b)
        {
            return a.x != b.x;
        }

        static void Main(string[] args)
        {
            Program a = new Program(10);
            Program b = new Program(20);
            Console.WriteLine(a > b);
            Console.WriteLine(a < b);
            Console.ReadKey();
        }
    }
}
