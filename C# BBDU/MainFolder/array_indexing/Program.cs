using System;

namespace array_indexing
{
    internal class Program
    {
        private readonly String[] name = new String[10];
        public String this[int index]
        {
            get
            {
                return name[index];
            }
            set
            {
                name[index] = value;
            }
        }
        static void Main(string[] args)
        {
            Program p = new Program();
            for (int i = 0; i < 10; i++)
            {
                p[i] = "Name" + i;
            }
            for (int i = 0; i < 10; i++)
            {
                Console.WriteLine(p[i]);
            }
            Console.ReadKey();
        }
    }
}
