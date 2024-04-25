using SubSum;
using System;

namespace useAssamply
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Class1 obj = new Class1();
            Console.WriteLine("Sum: " + obj.Sum(10, 20));
            Console.WriteLine("Sub: " + obj.Sub(10, 20));
            Console.ReadLine();
        }
    }
}
