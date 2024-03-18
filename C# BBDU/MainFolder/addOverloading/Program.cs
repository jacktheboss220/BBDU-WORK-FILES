using System;

namespace addOverloading
{
    internal class Program
    {
        public int addition(int x, int y)
        {
            return x + y;
        }
        public float addition(int x, float y)
        {
            return x + y;
        }
        public float addition(float x, int y)
        {
            return x + y;
        }
        public float addition(float x, float y)
        {
            return x + y;
        }


        static void Main(string[] args)
        {
            Program a = new Program();
            Console.WriteLine(a.addition(10, 20));
            Console.WriteLine(a.addition(10, 20.5f));
            Console.WriteLine(a.addition(10.5f, 20));
            Console.WriteLine(a.addition(10.5f, 20.5f));
            Console.ReadKey();
        }
    }
}
