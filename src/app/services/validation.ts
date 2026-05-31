export class Validations {
    public static mobilePattern = "[6-9]\\d{9}";
    public static emailPattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$";
    public static alphabetOnly = "(?!^\d+$)^.+$";
    public static numberOnly = "[0-9]+[-]?[0-9]*";
    public static policyPattern = "([0-9]{2,9}-[0-9]{2,9}-[0-9]{2,9}-[0-9]{2,9})";
    public static datePattern = "^(3[01]|[12][0-9]|0?[1-9])";
    public static monthPattern = "^(?:0?[1-9]|1[012])$";
    public static pincode = "^[1-9]{1}[0-9]{2}[0-9]{3}$";
    public static panPattern = "^[a-zA-Z]{5}[0-9]{4}[a-zA-Z]$";
    public static aadharPattern = "/^(?!(0))((?!(0000-0000-0000))(?!(1111-1111-1111))(?!(2222-2222-2222))(?!(3333-3333-3333))(?!(4444-4444-4444))(?!(5555-5555-5555))(?!(6666-6666-6666))(?!(7777-7777-7777))(?!(8888-8888-8888))(?!(9999-9999-9999))\d{4}-\d{4}-\d{4})$/"
    public static passPortpattern = "/^((?!q)(?!Q)(?!z)(?!Z)(?!x)(?!X)[a-zA-Z]){1}[0-9]{8}$/";
    public static chracterAndDashOnly = "^[a-zA-Z_ ]*$"
}