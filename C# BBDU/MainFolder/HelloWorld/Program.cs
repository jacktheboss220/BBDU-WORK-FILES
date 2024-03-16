using System;

class Programe
{
    private int age;
    private string name;

    public object this[int index]
    {
        get
        {
            if (index == 0)
            {
                return name;
            }
            else if (index == 1)
            {
                return age;
            }
            else
            {
                return null;
            }
        }
        set
        {
            if (index == 0)
            {
                name = (string)value;
            }
            else if (index == 1)
            {
                age = (int)value;
            }
        }
    }

    public static void Main(string[] args)
    {
        Programe p = new Programe();
        p[0] = "John";
        p[1] = 25;
        Console.WriteLine("Name: " + p[0]);
        Console.WriteLine("Age: " + p[1]);
        Console.ReadKey();
    }
}
