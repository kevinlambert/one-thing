/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { Thing, Periods as Periods0 } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function ThingCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    period: "",
    text: "",
    createdDateTime: "",
    updatedDateTime: "",
    Periods: undefined,
  };
  const [period, setPeriod] = React.useState(initialValues.period);
  const [text, setText] = React.useState(initialValues.text);
  const [createdDateTime, setCreatedDateTime] = React.useState(
    initialValues.createdDateTime
  );
  const [updatedDateTime, setUpdatedDateTime] = React.useState(
    initialValues.updatedDateTime
  );
  const [Periods, setPeriods] = React.useState(initialValues.Periods);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setPeriod(initialValues.period);
    setText(initialValues.text);
    setCreatedDateTime(initialValues.createdDateTime);
    setUpdatedDateTime(initialValues.updatedDateTime);
    setPeriods(initialValues.Periods);
    setCurrentPeriodsValue(undefined);
    setCurrentPeriodsDisplayValue("");
    setErrors({});
  };
  const [currentPeriodsDisplayValue, setCurrentPeriodsDisplayValue] =
    React.useState("");
  const [currentPeriodsValue, setCurrentPeriodsValue] =
    React.useState(undefined);
  const PeriodsRef = React.createRef();
  const getIDValue = {
    Periods: (r) => JSON.stringify({ id: r?.id }),
  };
  const PeriodsIdSet = new Set(
    Array.isArray(Periods)
      ? Periods.map((r) => getIDValue.Periods?.(r))
      : getIDValue.Periods?.(Periods)
  );
  const periodsRecords = useDataStoreBinding({
    type: "collection",
    model: Periods0,
  }).items;
  const getDisplayValue = {
    Periods: (r) => `${r?.order ? r?.order + " - " : ""}${r?.id}`,
  };
  const validations = {
    period: [],
    text: [],
    createdDateTime: [],
    updatedDateTime: [],
    Periods: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          period,
          text,
          createdDateTime,
          updatedDateTime,
          Periods,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Thing(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ThingCreateForm")}
      {...rest}
    >
      <TextField
        label="Period"
        isRequired={false}
        isReadOnly={false}
        value={period}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              period: value,
              text,
              createdDateTime,
              updatedDateTime,
              Periods,
            };
            const result = onChange(modelFields);
            value = result?.period ?? value;
          }
          if (errors.period?.hasError) {
            runValidationTasks("period", value);
          }
          setPeriod(value);
        }}
        onBlur={() => runValidationTasks("period", period)}
        errorMessage={errors.period?.errorMessage}
        hasError={errors.period?.hasError}
        {...getOverrideProps(overrides, "period")}
      ></TextField>
      <TextField
        label="Text"
        isRequired={false}
        isReadOnly={false}
        value={text}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              period,
              text: value,
              createdDateTime,
              updatedDateTime,
              Periods,
            };
            const result = onChange(modelFields);
            value = result?.text ?? value;
          }
          if (errors.text?.hasError) {
            runValidationTasks("text", value);
          }
          setText(value);
        }}
        onBlur={() => runValidationTasks("text", text)}
        errorMessage={errors.text?.errorMessage}
        hasError={errors.text?.hasError}
        {...getOverrideProps(overrides, "text")}
      ></TextField>
      <TextField
        label="Created date time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={createdDateTime && convertToLocal(new Date(createdDateTime))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              period,
              text,
              createdDateTime: value,
              updatedDateTime,
              Periods,
            };
            const result = onChange(modelFields);
            value = result?.createdDateTime ?? value;
          }
          if (errors.createdDateTime?.hasError) {
            runValidationTasks("createdDateTime", value);
          }
          setCreatedDateTime(value);
        }}
        onBlur={() => runValidationTasks("createdDateTime", createdDateTime)}
        errorMessage={errors.createdDateTime?.errorMessage}
        hasError={errors.createdDateTime?.hasError}
        {...getOverrideProps(overrides, "createdDateTime")}
      ></TextField>
      <TextField
        label="Updated date time"
        isRequired={false}
        isReadOnly={false}
        value={updatedDateTime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              period,
              text,
              createdDateTime,
              updatedDateTime: value,
              Periods,
            };
            const result = onChange(modelFields);
            value = result?.updatedDateTime ?? value;
          }
          if (errors.updatedDateTime?.hasError) {
            runValidationTasks("updatedDateTime", value);
          }
          setUpdatedDateTime(value);
        }}
        onBlur={() => runValidationTasks("updatedDateTime", updatedDateTime)}
        errorMessage={errors.updatedDateTime?.errorMessage}
        hasError={errors.updatedDateTime?.hasError}
        {...getOverrideProps(overrides, "updatedDateTime")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              period,
              text,
              createdDateTime,
              updatedDateTime,
              Periods: value,
            };
            const result = onChange(modelFields);
            value = result?.Periods ?? value;
          }
          setPeriods(value);
          setCurrentPeriodsValue(undefined);
          setCurrentPeriodsDisplayValue("");
        }}
        currentFieldValue={currentPeriodsValue}
        label={"Periods"}
        items={Periods ? [Periods] : []}
        hasError={errors?.Periods?.hasError}
        errorMessage={errors?.Periods?.errorMessage}
        getBadgeText={getDisplayValue.Periods}
        setFieldValue={(model) => {
          setCurrentPeriodsDisplayValue(
            model ? getDisplayValue.Periods(model) : ""
          );
          setCurrentPeriodsValue(model);
        }}
        inputFieldRef={PeriodsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Periods"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Periods"
          value={currentPeriodsDisplayValue}
          options={periodsRecords
            .filter((r) => !PeriodsIdSet.has(getIDValue.Periods?.(r)))
            .map((r) => ({
              id: getIDValue.Periods?.(r),
              label: getDisplayValue.Periods?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentPeriodsValue(
              periodsRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentPeriodsDisplayValue(label);
            runValidationTasks("Periods", label);
          }}
          onClear={() => {
            setCurrentPeriodsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Periods?.hasError) {
              runValidationTasks("Periods", value);
            }
            setCurrentPeriodsDisplayValue(value);
            setCurrentPeriodsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("Periods", currentPeriodsDisplayValue)
          }
          errorMessage={errors.Periods?.errorMessage}
          hasError={errors.Periods?.hasError}
          ref={PeriodsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Periods")}
        ></Autocomplete>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
