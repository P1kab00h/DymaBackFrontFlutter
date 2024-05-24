import 'package:flutter/material.dart';
import 'package:testflutter/views/activity_form/widgets/activity_form.dart';
import 'package:testflutter/widgets/dyma_drawer.dart';

class ActivityFormView extends StatelessWidget {
  const ActivityFormView({super.key});
  static const String routeName = "/activity-form";
  @override
  Widget build(BuildContext context) {
    String cityName = ModalRoute.of(context)!.settings.arguments as String;
    return Scaffold(
      appBar: AppBar(
        title: Text('ajouter une activité'),
      ),
      drawer: DymaDrawer(),
      body: ActivityForm(cityName: cityName),
    );
  }
}
