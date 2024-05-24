import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:provider/provider.dart';
import 'package:testflutter/models/activity_model.dart';
import 'package:testflutter/providers/city_provider.dart';

class ActivityForm extends StatefulWidget {
  final String cityName;

  const ActivityForm({super.key, required this.cityName});

  @override
  State<ActivityForm> createState() => _ActivityFormState();
}

class _ActivityFormState extends State<ActivityForm> {
  final GlobalKey<FormState> formKey = GlobalKey<FormState>();
  late FocusNode _priceFocusNode;
  late FocusNode _urlFocusNode;
  late Activity newActivity;
  late String? _nameInputAsync;
  bool _isLoading = false;

  FormState get formState {
    return formKey.currentState!;
  }

  @override
  void initState() {
    // TODO: implement initState
    newActivity = Activity(
      city: widget.cityName,
      name: '',
      price: 0,
      image: '',
      status: ActivityStatus.ongoing,
    );
    _priceFocusNode = FocusNode();
    _urlFocusNode = FocusNode();
    _nameInputAsync = null;
    super.initState();
    super.initState();
  }

  @override
  void dispose() {
    // TODO: implement dispose
    _priceFocusNode.dispose();
    _urlFocusNode.dispose();
    super.dispose();
  }

  Future<void> submitForm() async {
    try {
      CityProvider cityProvider = Provider.of<CityProvider>(
        context,
        listen: false,
      );
      formState.save();
      setState(() {
        _isLoading = true;
      });
      _nameInputAsync = await cityProvider.verifyIfActivityNameIsUnique(
        widget.cityName,
        newActivity.name,
      );

      if (formState.validate()) {
        formState.save();
        formState.reset();
        await cityProvider.addActivityToCity(newActivity);
        if (mounted) Navigator.pop(context);
      } else {
        setState(() {
          _isLoading = false;
        });
      }
    } catch (e) {
      setState(() {
        _isLoading = false;
      });
      print(e);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(5),
      child: Form(
        key: formKey,
        child: Column(
          children: [
            TextFormField(
              autofocus: true,
              validator: (value) {
                if (value!.isEmpty) {
                  return 'Merci de renseigner un nom';
                } else if (_nameInputAsync != null) {
                  return _nameInputAsync;
                }
                return null;
              },
              decoration: InputDecoration(
                labelText: 'Nom',
              ),
              textInputAction: TextInputAction.next,
              onSaved: (value) => newActivity.name = value!,
              onFieldSubmitted: (_) =>
                  FocusScope.of(context).requestFocus(_priceFocusNode),
            ),
            SizedBox(height: 10),
            TextFormField(
              keyboardType: TextInputType.number,
              validator: (value) {
                if (value!.isEmpty) {
                  return 'Merci de renseigner un prix';
                }
                return null;
              },
              decoration: InputDecoration(
                hintText: 'Prix',
              ),
              focusNode: _priceFocusNode,
              textInputAction: TextInputAction.next,
              onSaved: (value) => newActivity.price = double.parse(value!),
              onFieldSubmitted: (_) =>
                  FocusScope.of(context).requestFocus(_urlFocusNode),
            ),
            SizedBox(height: 10),
            TextFormField(
              keyboardType: TextInputType.url,
              validator: (value) {
                if (value!.isEmpty) {
                  return 'Merci de renseigner une URL pour l\'image';
                }
                return null;
              },
              decoration: InputDecoration(
                hintText: 'URL image',
              ),
              focusNode: _urlFocusNode,
              onSaved: (value) => newActivity.image = value!,
            ),
            SizedBox(height: 10),
            Row(
              crossAxisAlignment: CrossAxisAlignment.center,
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                TextButton(
                  onPressed: () => Navigator.pop(context),
                  child: Text('annuler'),
                ),
                ElevatedButton(
                  onPressed: _isLoading ? null : submitForm,
                  child: Text('Sauvegarder'),
                ),
              ],
            )
          ],
        ),
      ),
    );
  }
}
